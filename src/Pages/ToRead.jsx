import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import { getReadData } from '../Utilities/localstorage';

const ToRead = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const [datas, setDatas] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const savedReadData = getReadData();

    if (allBooks.length > 0) {
      const currentData = savedReadData.map((id) => {
        const book = allBooks.find(item => item.bookId === id);
        return book ? {name: book.bookName, totalPage: book.totalPages} : null;
      }).filter(Boolean);

      setDatas(currentData);
    }
  }, [allBooks]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className='py-12'>
      <div className="container mx-auto px-3">
        <BarChart
          width={900}
          height={500}
          data={datas} // Use the transformed data here
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="totalPage" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {datas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default ToRead;
