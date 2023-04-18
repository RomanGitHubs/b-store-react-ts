import {
  useCallback,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
} from 'react';
import classnames from 'classnames';
import './multiRangeSlider.css';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { reqPagination, reqPrice } from '../../../store/reducers/request';
import { putCatalogBooks } from '../../../store/reducers/book';

interface IPrice {
  min: number
  max: number
}

const Slider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { minPrice, maxPrice } = useAppSelector((state) => state.bookSlice);
  const { selectedMinPrice, selectedMaxPrice } = useAppSelector((state) => state.requestSlice);

  const handleChangePrice = (price: IPrice) => {
    dispatch(reqPrice(price));
    dispatch(reqPagination(0));
    dispatch(putCatalogBooks([]));
  };

  const debounce = (func: (price: IPrice) => void) => {
    let timer: ReturnType<typeof setTimeout> | null;
    // eslint-disable-next-line
    return function name(...args: any) {
      const context = timer;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  const debouncePrice = useCallback(debounce(handleChangePrice), []);

  const [minVal, setMinVal] = useState<number>(selectedMinPrice || minPrice);
  const [maxVal, setMaxVal] = useState<number>(selectedMaxPrice || maxPrice);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLInputElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - minPrice) / (maxPrice - minPrice)) * 100),
    [minPrice, maxPrice],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);
      // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    debouncePrice({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className="container">
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames('thumb thumb--zindex-3', {
          'thumb--zindex-5': minVal > maxPrice - 100,
        })}
      />
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={range} className="slider__range"></div>
        <div className="slider__left-value">$ {minVal}</div>
        <div className="slider__right-value">$ {maxVal}</div>
      </div>
    </div>
  );
};

export default Slider;
