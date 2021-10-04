type InsideGoodProps = {
  good: string;
}

function InsideGoodsScreen({good}: InsideGoodProps) : JSX.Element{
  return(
    <li className="property__inside-item">
      {good}
    </li>
  );
}
export default InsideGoodsScreen;
