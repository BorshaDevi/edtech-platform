import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
const StudentHomeCard = ({title , progress}) => {
    console.log(title ,progress)
    return (
        <div>
            <Card className='bg-gradient-to-r from-white  to-cyan-400 '>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Progress value={progress} className='bg-blue-400' />
                    <h1 className="text-2xl">{progress}%</h1>
                </CardContent>
            </Card>
        </div>
    )
}
export default StudentHomeCard;