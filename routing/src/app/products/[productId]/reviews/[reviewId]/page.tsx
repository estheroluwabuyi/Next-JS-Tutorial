export default async function ReviewList({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
}
