import { render, screen } from '@testing-library/react';
import App from './App';
import Banks from './components/Banks'
import Bank from './components/Bank'
import { useBanks } from './hooks'
jest.mock('./hooks/useBanks')

describe('Participants', () => {
    beforeEach(() => {
        const banksList = [
            { id: 0, bankName: 'Bancomer' },
            { id: 1, bankName: 'Banamex' },
            { id: 2, bankName: 'Santander' },
        ]
        useBanks.mockImplementation(() => banksList)
    })

    it('has same amount of cards as participants are provided', () => {
        render(<Banks />)
        expect(screen.getAllByTestId('bank-card')).toHaveLength(3)
    })
})

describe('BankCard', () => {
    const bank = { bankName: 'Bancoazteca', age: 5, description: 'Esta es una prueba' }
    it('renders properties', () => {
        render(<Bank bank={bank} />)
        expect(screen.getByTestId('bank-card-name')).toHaveTextContent(
            bank.bankName
        )
        expect(screen.getByTestId('bank-card-age')).toHaveTextContent(
            bank.age
        )
        expect(screen.getByTestId('bank-card-description')).toHaveTextContent(
            bank.description
        )
    })
})
