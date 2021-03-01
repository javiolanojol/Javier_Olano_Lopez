const Meal = require('../models/Meal');
const CartItem = require('../models/CartItem')
const cartController = {}

cartController.add = async function(req,res){

    const qty = req.body.qty
    const {img_url,img_alt,price,name,description} = await Meal.findOne({_id:req.params.id});
    const cartItem = new CartItem({img_url,img_alt,price,name,description,qty});
    await cartItem.save();
    res.redirect('/');
    
}

cartController.list = async (req,res)=>{

    const cartList = await CartItem.find({});
    res.render('cart',{cartList:cartList});

}

cartController.changeQty = async (req,res)=>{

    const id = req.params.id;
    const qty = req.body.qty;
    const cartItem = await CartItem.findById(id);
    let finalQty = cartItem.qty - qty;
    const update = {qty:finalQty}
    if(finalQty == 0 || finalQty < 0){
        await cartItem.deleteOne();
        return res.redirect('/cart_list');

    }
    await CartItem.findOneAndUpdate(id,update);
    return res.redirect('/cart_list');

}
// cartController.delete = async (req,res)=>{

//     await CartItem.deleteOne({_id:req.params.id});
//     return res.redirect('/cart_list');

// }


cartController.confirm = async (req,res)=>{

    let pedidoFinal = "Pedido: ";
    const numeroPropietario = 661192567;
    const cart = await CartItem.find({}); 
    let totalFactura = 0;

    for (let i = 0; i < cart.length; i++) {
        let textopedido = cart[i].name + " x (" + cart[i].qty + ") --";
        pedidoFinal += textopedido;
        totalFactura+=parseFloat(cart[i].price*cart[i].qty);
        
    }
    totalFactura=totalFactura+(totalFactura*0.1)+2.5;
    pedidoFinal += 'Total de factura: ' + totalFactura + ' €';

    res.redirect('https://api.whatsapp.com/send/?phone=34'+ numeroPropietario + '&text=' + pedidoFinal + '&app_absent=0');
    console.log(pedidoFinal);
    await CartItem.deleteMany();

}

module.exports = cartController;