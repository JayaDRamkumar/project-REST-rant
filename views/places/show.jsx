const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = sumRatings / data.place.comments.length
    rating = (
      <h3>
        {averageRating} stars
      </h3>
    )
    
  }
  
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          
        </div>
      )
    })
  }
    return (
        <Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <h1>
        <img src={data.place.pic} alt={data.place.name} /> 
            </h1>
            <h2>
                Rating
              </h2>
              {rating}
              <br />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
    
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
                 <a href={`/places/${data.id}/edit`} className="btn btn-warning">           Edit
         </a>
         <form method="POST" action={`places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
             Delete
           </button>
        </form>
    </div>
    <div className="row">
            ...
          </div>
          <hr />
          <h2>Comments</h2>
          {comments}
    </div>
    <h1>Rant or Rave</h1>
            <form method="POST" action="/comments">
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <input className="form-control" id="content" name="content" required />
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="starrating">Star Rating</label>
                    <input type="range" 
                    min="0" 
                    max="5" step="0.5" pattern="\d+" />
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="rant">Rant</label>
                    <input class="messageCheckbox" 
                    type="checkbox" 
                    value="3" 
                    name="mailId[]" />
                         </div>
                      </form>
                <input className="btn btn-primary" type="submit" value="Comment" />

  </main>
  
</Def>

    )}


module.exports = show



// function show(data) {
//   return (
//     <Def>
//       <main>
//         <h1>{data.place.name}</h1>
//         <h2>Rating</h2>
//         <h2>Description</h2>
//         <p>Located in San Diego, Califronia</p>
//         <p>serving modern Thai fusion</p>

//         <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//           Edit
//         </a>
//         <form method="POST" action={`places/${data.id}?_method=DELETE`}>
//           <button type="submit" className="btn btn-danger">
//             Delete
//           </button>
//         </form>

//         <img src="/images/PadThaiDish.jpg" alt="bowl of Pad Thai"></img>
//       </main>
//     </Def>
//   );
// }




