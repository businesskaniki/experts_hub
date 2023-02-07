import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className="card">
        <div className="card_title">
          <h5>title</h5>
        </div>
        <div className="card_body">
            <p>Ldolor sit uam officia dolorem autem soluta, rem veritatis adipisci in suscipit fugit inventore quae expedita molestias voluptas aliquid</p>
        </div>
        <div className="card_footer">
            <button>
                delete
            </button>
        </div>
    </div>
  )
}

export default Card