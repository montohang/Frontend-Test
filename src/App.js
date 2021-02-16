import './App.css';
import CardFilter from './sections/CardFilter';
import CardList from './sections/CardList';
import Pagination from './sections/Pagination';
import SearchFilter from './sections/SearchFilter';
import './assets/index.css';
import BreadCrumb from './components/breadcrumb/BreadCrumb';

function App() {
	return (
		<div className="App">
			<BreadCrumb />
			<div class="container-fluid mt-5">
				<div class="row">
					<div class="col-12 col-md-6 col-lg-3">
						<CardFilter />
					</div>
					<div class="col-12 col-md-6 col-lg-9">
						<SearchFilter />
						<CardList />
						<Pagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
