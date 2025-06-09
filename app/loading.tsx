// app/blog/loading.tsx
export default function Loading() {
	return (
		<div>
			<div className='h-8 w-1/2 bg-gray-200 animate-pulse rounded mb-4' />
			<div className='h-4 w-full bg-gray-100 animate-pulse rounded' />
		</div>
	);
}
