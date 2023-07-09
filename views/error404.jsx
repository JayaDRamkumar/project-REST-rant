const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/dog.jpg" alt="Variety Fruit" />
                 <div>
                  Photo by <a href="https://unsplash.com/pt-br/@mtsjrdl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mathis Jrdl</a> on <a href="https://unsplash.com/images/animals/puppies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                 </div>
                 </div>
                  <div></div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
