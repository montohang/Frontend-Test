import './App.css';
import CardFilter from './sections/CardFilter';
import CardList from './sections/CardList';
import Pagination from './sections/Pagination';
import SearchFilter from './sections/SearchFilter';
import './assets/index.css';
import BreadCrumb from './components/breadcrumb/BreadCrumb';
import CardOption from './sections/CardOption';

function App() {
	return (
		<div className="App">
			<BreadCrumb />
			<hr />
			<div className="container mt-3">
				<div class="row">
					<div className="col-12 col-md-6 col-lg-3 mb-3">
						<CardFilter />
					</div>
					<div className="col-12 col-md-6 col-lg-9">
						<SearchFilter />
						<CardOption />
						<CardList />
						<Pagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
