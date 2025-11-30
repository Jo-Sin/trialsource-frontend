import Container from "@/ui/Container"
import PaginateLinks from "@/ui/Paginate/PaginateLinks"

const TrialsPage = () => {
    return (
        <div>
            <Container>
                <h1 className="text-4xl my-8">Browse Trials</h1>

                <PaginateLinks />
            </Container>
        </div>
    )
}

export default TrialsPage