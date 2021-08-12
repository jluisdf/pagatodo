import React from 'react'
import { useQuery } from 'react-query'
import Bank from './Bank'
import Pageloader from './Pageloader'
import ErrorFetching from './ErrorFetching'
import { useBanks } from '../hooks'

const Banks = () => {

    /* simple call function
    const getBanks = async () => {
        const response = await fetch(process.env.REACT_APP_API)
        return response.json()
    }

    const { status, isLoading, isFetching, data } = useQuery('banks', getBanks)
    */

    const { status, data } = useBanks()
    // const status = 'success'
    // const data = useBanks()

    return (
        <>
            { status === 'loading' && <Pageloader /> }
            { status === 'error' && <ErrorFetching /> }
            { status === "success" &&
                <section className="section">
                    <h1 className="title">Lista de Bancos</h1>
                    <div className="columns is-multiline">
                        {
                            data.map((item, index) => (
                                <Bank
                                    key={index}
                                    bank={item}
                                />
                            ))
                        }
                    </div>
                </section>
            }
        </>
    )
}

export default Banks
