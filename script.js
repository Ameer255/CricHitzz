function play(channel) {
  let url = channel.id
  console.log(url)

  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log('success')
        window.location.href=url;
aler("playing);
      }
    }).catch(e=>{
        console.log('failed...')
        document.querySelector('.container').style.display='none';
document.querySelector('.no-internet').style.display='block';
alert('failed);

    })
    
}
