function play(channel) {
  let url = channel.id
  console.log(url)

  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        console.log('success')
        location.replace(url)
      }
    }).catch(e=>{
        console.log('failed...')
        location.replace('https://ameer255.github.io/CricHitzz/NoInternet.html')
    })
    
}
