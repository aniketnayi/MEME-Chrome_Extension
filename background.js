let ima = document.querySelector("#imgzz");
const btn = document.getElementById('btn');

let api_url = "https://fun.killingtime.workers.dev";

async function downloadImage(
    imageSrc,
    nameOfDownload,
  ) {
    const response = await fetch(imageSrc);
    //json.img
  
    const blobImage = await response.blob();
  
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }

fetch(api_url)
.then(res => res.json())
.then(json => {
    ima.src = json.img;
    
    btn.addEventListener('click', () => {
    
    downloadImage(
    json.img,
    'image.jpg',
  )
    .then(() => {
      console.log('The image has been downloaded');
    })
    .catch(err => {
      console.log('Error downloading image: ', err);
    });
});
})
