

function play(channel) {
  let url = channel.id
  console.log(url)

  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log('success')
        window.location.href=url;
        swal("Channel Loading...", "Please Wait, This May Take a Few Seconds", timer: 4000); 
      }
    }).catch(e=>{
        console.log('failed...')
        /*document.querySelector('.container').style.display='none';
document.querySelector('.no-internet').style.display='block';
*/
swal("No Internet Connection..!", 'warning'); 

    })
    
}
