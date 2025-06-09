import React from "react";

const PostLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className='flex flex-col items-center min-h-[70vh]'>
			<div className='w-full grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 items-center'>
				{children}
			</div>
		</div>
	);
};

export default PostLayout;
