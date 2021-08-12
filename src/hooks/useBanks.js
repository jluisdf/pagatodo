import { useQuery } from 'react-query'

export default () => {
    const { status, data = [] } = useQuery(
        'banks',
        async () => await fetch(process.env.REACT_APP_API).then(res => res.json())
    )

    return { status, data }
}
