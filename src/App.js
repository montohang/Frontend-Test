import './App.css';
import CardFilter from './sections/CardFilter';
import CardList from './sections/CardList';
import Pagination from './sections/Pagination';
import SearchFilter from './sections/SearchFilter';
import './assets/index.css';

function App() {
	return (
		<div className="App">
			<div class="container-fluid mt-5">
				<div class="row">
					<div class="col-3">
						<CardFilter />
					</div>
					<div class="col-9">
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
