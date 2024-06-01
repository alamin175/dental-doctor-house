import { Helmet } from 'react-helmet';

const MyHistory = () => {
	return (
		<div>
			<Helmet>
				<title>My History - Doc House</title>
			</Helmet>
			<h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
				My History
			</h1>

			<h4 className="text-xl m-12 font-bold p-7 bg-emerald-200">
				This section coming Soon
			</h4>
		</div>
	);
};

export default MyHistory;
