import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const StudentHomeCard = ({title , progress}) => {
    console.log(title ,progress)
    return (
        <div>
            <Card className='bg-gradient-to-r from-cyan-500  to-cyan-400'>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{progress}</p>
                </CardContent>
            </Card>
        </div>
    )
}
export default StudentHomeCard;