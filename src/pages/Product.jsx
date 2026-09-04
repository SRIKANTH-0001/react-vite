import { useNavigate } from 'react-router-dom';
import divStyle from '../Styles.module.css';

export function MobileProduct() {
    const mobiles = ["Samsung", "Iphone", "Nothing", "Infinix", "Vivo"];

    return (
        <div className={divStyle.primary}>
            <div className={divStyle.secondary}>
                <h3 style={{ fontSize: "29px", fontWeight: "bolder" }}>
                    In this Section,You can get Branded Mobiles!..<br /><br />
                    <span>Available Brands</span>
                </h3>
                <br />
                <ol className={divStyle.productList}>
                    {mobiles.map((mobile, index) => (
                        <li key={index}>{mobile}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export function WatchProduct() {
    const watches = ["Titan", "Casio", "Seiko", "Rolex", "Omega"];

    return (
        <div className={divStyle.primary}>
            <div className={divStyle.secondary}>
                <h3 style={{ fontSize: "29px", fontWeight: "bolder" }}>
                    In this Section,You can get Branded Watches!..<br /><br />
                    <span>Available Brands</span>
                </h3>
                <br />
                <ol className={divStyle.productList}>
                    {watches.map((watch, index) => (
                        <li key={index}>{watch}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

function Product() {
    const navigate = useNavigate();

    return (
        <>
            <div className={divStyle.primary}>
                <div className={divStyle.secondary}>
                    <h1>Welcome to Product Section!</h1>
                    <br />
                    <h3>In this section,You can get Branded Watches and Mobiles</h3>
                    <br />
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20px" }}>
                        <h1 style={{ fontSize: "60px" }}>⌚</h1>
                        <br />
                        <h1 style={{ fontSize: "60px" }}>📱</h1>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button onClick={() => navigate('/product/watches')} style={{ height: "36px", width: "230px", backgroundColor: "green", color: "lightyellow", fontSize: "17px", borderRadius: "10px", fontWeight: "bold" }}>
                            Navigate to Watch Section
                        </button>
                        <button onClick={() => navigate('/product/mobiles')} style={{ height: "36px", width: "230px", backgroundColor: "green", color: "lightyellow", fontSize: "17px", borderRadius: "10px", fontWeight: "bold" }}>
                            Navigate to Mobile Section
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product