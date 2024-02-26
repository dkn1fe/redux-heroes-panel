import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch, useSelector } from "react-redux";
import { filtersFetched,filtersFetchingError,filtersFetching,filteredHeroes} from "../../actions";
import Spinner from "../spinner/Spinner";
import classNames from "classnames";


// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters,filterLoadingStatus,activeFilter} = useSelector(state =>  state.filter)
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(filtersFetching());
     request("http://localhost:3001/filters")
     .then(data => dispatch(filtersFetched(data)))
     .catch(() => dispatch(filtersFetchingError()))
    },[]);

  
     
    if(filterLoadingStatus === 'loading'){
         return <Spinner/>
    }
    else if(filterLoadingStatus === 'error'){
        return <h5>Error</h5>
    }


    const renderFilterItems = (arr) => {
         if(arr.length === 0){
            return <h5>Фильтры не загрузились</h5>
         }
         return arr.map(({name,className,id}) => {
            const btnClass = classNames('btn',className,{
                 'active' : name === activeFilter
            });
            
             return (
                <>
                <button
                 key = {id}
                 onClick={() => dispatch(filteredHeroes(name))}
                className={btnClass}
                  >{name}</button>
                </>
             )
         })
    }
   const filterItems = renderFilterItems(filters)
   return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                   {filterItems}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;