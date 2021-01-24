alert('whats happening');

function play(channel) {
  let url = channel.id
  console.log(url)

  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log('success')
        window.location.href=url;
        swal("Channel Loading...", "Please Wait, This May Take a Few Seconds
"); 
      }
    }).catch(e=>{
        console.log('failed...')
        /*document.querySelector('.container').style.display='none';
document.querySelector('.no-internet').style.display='block';
alert('failed');*/
swal("No Internet Connection..!", 'warning'); 

    })
    
}
