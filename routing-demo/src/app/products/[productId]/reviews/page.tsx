export default async function ReviewList({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId;
    return (
        <>
            <h1>Review List for product {productId}</h1>
            <h2>Review 1</h2>
            <h2>Review 2</h2>
            <h2>Review 3</h2>
        </>
    );
}
