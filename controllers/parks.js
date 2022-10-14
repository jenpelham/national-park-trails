//pulling park data
document.querySelector('trail-list').addEventListener('click', getFetch)

function getFetch(){
  const entry = document.querySelector('input').value
  const url = `https://developer.nps.gov/api/v1/thingstodo?parkCode=${entry}`

  fetch(url, {
    headers: {
      'X-Api-Key': 's0MCUeuVkM7tvHHckFwdhZMIQlV0QGQ484wjaZYj'
    }
  })
      .then(res => res.json()) // parse response as JSON
      .then(results => {
        //console.log(results.data)
        const trail = results.data.filter(todo => {
          return todo.activities.some(activity => activity.name === 'Hiking')
        })
        //const trail = results.data[0].activities.name//.filter(name => name === "hiking")
        console.log(trail)

        const trailName = trail.map(thingToDo => thingToDo.title)
        document.querySelector('.trail-name').innerText = trailName

        const trailDescription = trail.map(thingToDo => thingToDo.shortDescription)
        document.querySelector('h3').innerText = trailDescription

        const trailDuration = trail.map(thingToDo => thingToDo.duration)
        document.querySelector('h4').innerText = trailDuration

        const trailImage = trail.map(thingToDo => thingToDo.images.url)
        document.querySelector('img').src = trailImage
        // document.querySelector('h2').innerText = results.data.filter(designation => designation === "National Park")
        // console.log(results.data.filter(designation => designation === "National Park"))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}