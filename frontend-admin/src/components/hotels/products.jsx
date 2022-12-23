//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSquare } from '@fortawesome/free-solid-svg-icons';
import './products.css';
import { useEffect, useState } from 'react';
import AdminAPI from '../../API/AdminAPI';
import convertMoney from '../../convertMoney';
import { Input } from 'reactstrap';

const Products = () => {
  // let navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await AdminAPI.getProduces();
      // console.log(response.data.products);
      if (response.data.error) {
        localStorage.removeItem('userId');
        window.location.reload(false);
      } else {
        const products = response.data.products.filter((l) => {
          return l.name.includes(search);
        });
        setList(products);
        // console.log(list);
      }
    };
    fetchData();
  }, [check, search]);

  const handelChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleDelete = (t) => {
    console.log(t._id);
    if (!window.confirm('Do you want delete this Product?')) return;
    const fetchData = async () => {
      const response = await AdminAPI.deleteProduct(t._id);
      console.log(response);
    };
    fetchData();
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <div className="search">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Enter Search!"
          value={search}
          onChange={handelChange}
        />
      </div>
      <div className="transactions-box">
        <div className="t-box">
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">
                  <FontAwesomeIcon icon={faSquare} />
                </th> */}
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {list.map((t) => {
                return (
                  <tr key={t._id} className={`row-${list.indexOf(t) % 2}`}>
                    {/* <th scope="col">
                      <FontAwesomeIcon icon={faSquare} />
                    </th> */}
                    <td>{t._id} </td>
                    <td>
                      {t.name} {list.indexOf(t)}
                    </td>
                    <td>{convertMoney(t.price)} VND</td>
                    <td>
                      <img src={t.img1}></img>
                    </td>
                    <td>{t.category}</td>
                    <td>
                      <div className="btn-b">
                        <button className="btn-edit">Update</button>
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(t)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="space"></div>
          {/* <div className="page">
            <div>
              <p>
                1-{list.length} of {list.length} {"< >"}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
