import Bannar from "@/component/Bannar";
import Book from "@/component/Book";
import DiscountSection from "@/component/DiscountSection";
import Review from "@/component/Review";



export default function Home() {
  return (
    <div className="mx-0 container px-2 ">
      <Bannar></Bannar>
      <DiscountSection></DiscountSection>
      <Book></Book>
      <Review></Review>
    </div>
  );
}
