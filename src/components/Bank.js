import React from 'react'

const Bank = bank => {

    const { description, bankName, url, age } = bank.bank

    return (
        <div className="column is-4">
            <div className="card" data-testid="bank-card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt={bankName} />
                            </figure>
                        </div>
                        <div className="content">
                            <p className="title is-4" data-testid="bank-card-name">{bankName}</p>
                            <p className="subtitle is-6" data-testid="bank-card-age">Edad: {age} años</p>
                        </div>
                    </div>
                    <div className="content">
                        <p className="title is-6" data-testid="bank-card-description">
                            “{description}”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank
