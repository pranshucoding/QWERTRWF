function click(){
    navigator.mediaDevices.getUserMedia({ audio: true}); classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kmZKtTBK5/model.json', modelReady);
}
function modelReady(){ classifier.classify( gotResults); }
function gotResults(error,results){
if (error) {
    console.error(error);
} else {
    console.log (results);
    random_number_r = Math.floor(Math.random() * 255)+1;
    random_number_g = Math.floor(Math.random() * 255)+1;
    random_number_b = Math.floor(Math.random() * 255)+1;
    document.getElementById("resultl").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("resultc").innerHTML = 'Confidence - '+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("resultl").innerHTML = "rgb("+random_number_r+","+random_number_g+","+random_number_r+ ")";
    document.getElementById("resultc").innerHTML = "rgb("+random_number_r+","+random_number_g+","+random_number_r+ ")";

    img=document.getElementById('r');
    img1=document.getElementById('m');
    img2=document.getElementById('n');
    img3=document.getElementById('x');

    if (results[0].label == "RONALDO"){
        img.src="https://c.tenor.com/kkE34VIdzL0AAAAM/cristiano-ronaldo-is-named-player-of-the-century-at-the-globe-soccer-awards-foot-ball.gif"
        img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzPi-Vx1oKPdeCcGmZrAl5jD0b42tgZfufw&usqp=CAU"
        img2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/696190d4-599a-4214-ac52-b66ebd649a22/df7qocy-77c9099d-1a2a-4603-9647-31d92b0f7b83.jpg/v1/fit/w_300,h_900,q_70,strp/neymar_jr_by_albatrossbg_df7qocy-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NjE5MGQ0LTU5OWEtNDIxNC1hYzUyLWI2NmViZDY0OWEyMlwvZGY3cW9jeS03N2M5MDk5ZC0xYTJhLTQ2MDMtOTY0Ny0zMWQ5MmIwZjdiODMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jSNd91aFqctoPLloXsE3BmdG2X69CCz29yRQuck0ssk"
        img3.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bef3a4f3-3043-4074-8415-201c72c23aef/dcwzy9u-ee1c9329-3ecc-45f5-be83-2f8ef202f312.jpg/v1/fill/w_1920,h_1920,q_75,strp/kylian_mbappe_2018_2019___drawing_by_mhmdao_dcwzy9u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2JlZjNhNGYzLTMwNDMtNDA3NC04NDE1LTIwMWM3MmMyM2FlZlwvZGN3enk5dS1lZTFjOTMyOS0zZWNjLTQ1ZjUtYmU4My0yZjhlZjIwMmYzMTIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tHMU-u1ux94jK3MKDIBZe3bZyqdYaActTEhG4nTqDZ0"
    }else if (results[0].label == "MESSI"){
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYrkQd0-B2fsRHt9dzKiZIL6PexskvhRdJw&usqp=CAU"
        img1.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76761445626505.5836ef9a8de41.gif"
        img2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/696190d4-599a-4214-ac52-b66ebd649a22/df7qocy-77c9099d-1a2a-4603-9647-31d92b0f7b83.jpg/v1/fit/w_300,h_900,q_70,strp/neymar_jr_by_albatrossbg_df7qocy-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NjE5MGQ0LTU5OWEtNDIxNC1hYzUyLWI2NmViZDY0OWEyMlwvZGY3cW9jeS03N2M5MDk5ZC0xYTJhLTQ2MDMtOTY0Ny0zMWQ5MmIwZjdiODMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jSNd91aFqctoPLloXsE3BmdG2X69CCz29yRQuck0ssk"
        img3.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bef3a4f3-3043-4074-8415-201c72c23aef/dcwzy9u-ee1c9329-3ecc-45f5-be83-2f8ef202f312.jpg/v1/fill/w_1920,h_1920,q_75,strp/kylian_mbappe_2018_2019___drawing_by_mhmdao_dcwzy9u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2JlZjNhNGYzLTMwNDMtNDA3NC04NDE1LTIwMWM3MmMyM2FlZlwvZGN3enk5dS1lZTFjOTMyOS0zZWNjLTQ1ZjUtYmU4My0yZjhlZjIwMmYzMTIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tHMU-u1ux94jK3MKDIBZe3bZyqdYaActTEhG4nTqDZ0"
    }else if (results[0].label == "NEYMAR"){
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYrkQd0-B2fsRHt9dzKiZIL6PexskvhRdJw&usqp=CAU"
        img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzPi-Vx1oKPdeCcGmZrAl5jD0b42tgZfufw&usqp=CAU"
        img2.src = "https://media4.giphy.com/media/GRujKxwgaO9msL6p2M/giphy.gif"
        img3.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bef3a4f3-3043-4074-8415-201c72c23aef/dcwzy9u-ee1c9329-3ecc-45f5-be83-2f8ef202f312.jpg/v1/fill/w_1920,h_1920,q_75,strp/kylian_mbappe_2018_2019___drawing_by_mhmdao_dcwzy9u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2JlZjNhNGYzLTMwNDMtNDA3NC04NDE1LTIwMWM3MmMyM2FlZlwvZGN3enk5dS1lZTFjOTMyOS0zZWNjLTQ1ZjUtYmU4My0yZjhlZjIwMmYzMTIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tHMU-u1ux94jK3MKDIBZe3bZyqdYaActTEhG4nTqDZ0"
    }else{
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYrkQd0-B2fsRHt9dzKiZIL6PexskvhRdJw&usqp=CAU"
        img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzPi-Vx1oKPdeCcGmZrAl5jD0b42tgZfufw&usqp=CAU"
        img2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/696190d4-599a-4214-ac52-b66ebd649a22/df7qocy-77c9099d-1a2a-4603-9647-31d92b0f7b83.jpg/v1/fit/w_300,h_900,q_70,strp/neymar_jr_by_albatrossbg_df7qocy-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY5NjE5MGQ0LTU5OWEtNDIxNC1hYzUyLWI2NmViZDY0OWEyMlwvZGY3cW9jeS03N2M5MDk5ZC0xYTJhLTQ2MDMtOTY0Ny0zMWQ5MmIwZjdiODMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jSNd91aFqctoPLloXsE3BmdG2X69CCz29yRQuck0ssk"
        img3.src = "https://media1.giphy.com/media/Urbrsmf0XQcHsIo5SK/giphy.gif"
    }
}
}