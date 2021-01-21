function play(channel) {
  let url = channel.id
  console.log(url)

  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log('success')
        window.location.href=url;
      }
    }).catch(e=>{
        console.log('failed...')
        window.location.href='https://ameer255.github.io/CricHitzz/NoInternet.html';
    })
    
}
