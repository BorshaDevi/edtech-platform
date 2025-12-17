import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import books from "@/data/book.json";
const Book = () => {
  return (
    <div className='mt-10 md:ml-10'>
      <h1 className='text-center font-semibold text-2xl text-cyan-700 mb-5 underline underline-offset-2'>Our Books</h1>
      <div className="flex gap-5">
        {
           books.map(book => (
            <div key={book.id}>
              {/* Hover card */}
          <HoverCard>
        <HoverCardTrigger>
          {/* card */}
          <div className="card">
            <img className='rounded-b-md p-1 ' src={book.img} alt={book.title}></img>
            <h1 className="text-2xl font-medium">{book.title}</h1>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-60">
          <h1 className="text-xl space-x-2"><span >Author:</span><span className="text-cyan-700">{book.author}</span></h1>
          <p className="text-xl space-x-2"><span >Price:</span><span className="text-green-500">{book.price}TK.</span></p>
        </HoverCardContent>
      </HoverCard>
            </div>
           ))
        }
      </div>

    </div>
  )
}
export default Book;
