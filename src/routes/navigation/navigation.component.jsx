import { ReactComponent as Icon } from "../../assets/img/logo/logo.svg";
import { ReactComponent as Search } from "../../assets/img/vector/search.svg";
import { ReactComponent as User } from "../../assets/img/vector/user.svg";
import { ReactComponent as Like } from "../../assets/img/vector/like.svg";
import { ReactComponent as Cart } from "../../assets/img/vector/cart.svg";

const Navigation = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row py-5 px-24 items-center">
                <Icon className="flex-1" />
                <div className="flex-1 py-2 px-4 bg-[#F8F8F8] flex flex-row items-center justify-between rounded">
                    <input type="text" placeholder="Search for more than 20,000 products" className="p-2 w-full bg-transparent outline-none" />
                    <Search />
                </div>
                <div className="flex-1 grid grid-cols-7 pl-5" >
                    <div className="grid col-span-2">
                        <label className="text-left text-sm">For support ?</label>
                        <h2 className="text-left text-sm">+980-34984089</h2>
                    </div>
                    <div className="grid items-center gap-x-2 col-span-3 place-items-center grid-cols-3">
                        <div className="grid bg-[#F1F1F1] rounded-full p-4 ">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="grid bg-[#F1F1F1] rounded-full p-4 relative">
                            <div className="absolute left-7 bottom-8 w-8 h-8 bg-[#FFC43F] border-4 border-white rounded-full items-center flex justify-center">
                                <label className="text-sm">12</label>
                            </div>
                            <Like className="w-4 h-4" />
                        </div>
                        <div className="grid bg-[#F1F1F1] rounded-full p-4 relative">
                            <div className="absolute left-7 bottom-8 w-8 h-8 bg-[#FFC43F] border-4 border-white rounded-full items-center flex justify-center">
                                <label className="text-sm ">12</label>
                            </div>
                            <Cart className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="grid  col-span-2 place-items-center">
                        <label className="text-left">your cart</label>
                        <h2 className="text-left">$1290.00</h2>
                    </div>


                </div>
            </div>
            <hr className="bg-[#F6F6F6]" />
            <div className="flex flex-row px-24 pt-6">
                <div className="flex-1">

                </div>

                <div className="flex-2  flex-row space-x-3">
                    <button className="w-24 h-8 hover:bg-[#FFC43F] rounded-md">Home</button>
                    <button className="w-24 h-8 hover:bg-[#FFC43F] rounded-md">Shop</button>
                    <button className="w-24 h-8 hover:bg-[#FFC43F] rounded-md">Page</button>
                    <button className="w-24 h-8 hover:bg-[#FFC43F] rounded-md">Services</button>
                    <button className="w-24 h-8 hover:bg-[#FFC43F] rounded-md">Blog</button>
                </div>
                <div className="flex-1">

                </div>
            </div>
        </div >
    )
}

export default Navigation;