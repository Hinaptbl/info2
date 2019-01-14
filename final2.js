
var img = new Image();


function onFileSelected(){
   var file = document.getElementById('input_file').files[0];
   var reader = new FileReader();
   reader.onload = onFileLoaded;
   reader.readAsDataURL(file);
}

function onFileLoaded(e){
   var src_data = e.target.result;
   img.onload = onImageSetted;
   img.src = src_data;
}

function onImageSetted(e){
  var img_data = createImageData(e.target);
  document.getElementById('test_canvas').width = img_data.width;
  document.getElementById('test_canvas').height = img_data.height;
  document.getElementById('test_canvas').getContext('2d').putImageData(img_data, 0, 0);
  document.getElementById('test_canvas').img_data = img_data;
}

function createImageData(img){
  var cv = document.createElement('canvas');
  cv.width = img.naturalWidth;
  cv.height = img.naturalHeight;
  var ct = cv.getContext('2d');
  ct.drawImage(img, 0, 0);
  var data = ct.getImageData(0, 0, cv.width, cv.height);
  return data;
}

async function predict() {
    var img_data = createImageData(img);
    const model = await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
     input = tf.fromPixels(img_data);
     input = tf.image.resizeBilinear(input,[224, 224]);
     input = tf.expandDims(input, 0);
     input = tf.div(input, tf.scalar(255));
     const pred =model.predict(input);

     pred_idx = tf.argMax(pred, 1);
     pred_idx = pred_idx.dataSync();
     pred_idx = Array.from(pred_idx);
     pred_name = classes[pred_idx[0]];
     document.getElementById('result').innerHTML = 'Prediction: ' + pred_name;}
