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
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{progress}</p>
                </CardContent>
            </Card>
        </div>
    )
}
export default StudentHomeCard;