import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Jae', text: 'Learning React is fun!!'},
    {id: 'q2', author: 'woogieee', text: 'Learning coding is great !!!'},
]

const AllQuotes = () =>{
    return <QuoteList quotes={DUMMY_QUOTES}/>

}

export default AllQuotes;