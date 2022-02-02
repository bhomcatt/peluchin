Webcam.set({
    width: 350,
    height: 350,
    img_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera").innerHTML;
Webcam.attach = ("#camera");
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id = "capture_image" src ="'+data_uri+'"/>';
})
};
console.log("the ml5 version is "+ ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8aKpS4kd3/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded!");
}
function check(){
img = document.getElementById("captured_image");
classifier.classify(img,gotResult)
}
function gotResult(error, results){
    if(error){
        console.error("dang it! we broke the camera! can you try again?");
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.etoFixed(3);
    }
}
