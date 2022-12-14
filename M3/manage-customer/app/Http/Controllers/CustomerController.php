<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\StoreCustomerRequest;
use Illuminate\Support\Facades\Validator;
class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return view('customers.list', compact('customers'));
    }

    public function create()
    {
        return view('customers.create');
    }

    // Cach 2
    // public function store(StoreCustomerRequest $request)
    public function store(Request $request)
    {   
        // Cach 1
        // $validated = $request->validate([
        //     'name' => 'required|unique:customer|max:6',
        //     'email' => 'required',
        //     'dob' => 'required'
        // ],
        //     [
        //         'name.required'=>'truong bat buoc',
        //         'name.unique'=>'khong duong trung lap du lieu',
        //         'name.max'=>'truong bat buoc be hon :max',
        //         'email.required'=>'truong bat buoc',
        //         'dob.required'=>'truong bat buoc'
        //     ]
        // );

        // Cach 3
        $validator = Validator::make($request->all(), [
                'name' => 'required|unique:customer|max:6',
                'email' => 'required',
                'dob' => 'required'
            ],
            [
                'name.required'=>'truong bat buoc',
                'name.unique'=>'khong duong trung lap du lieu',
                'name.max'=>'truong bat buoc be hon :max',
                'email.required'=>'truong bat buoc',
                'dob.required'=>'truong bat buoc'
            ]
        );
        
        if ($validator->fails()) {
            return redirect('customers/create')
                        ->withErrors($validator)
                        ->withInput();
        }



        $customer = new Customer();
        $customer->name = $request->input('name');
        $customer->email = $request->input('email');
        $customer->dob = $request->input('dob');
        $customer->save();

        //dung session de dua ra thong bao
        Session::flash('success', 'T???o m???i kh??ch h??ng th??nh c??ng');
        //tao moi xong quay ve trang danh sach khach hang
        return redirect()->route('customers.index');
    }

    public function edit($id)
    {
        $customer = Customer::findOrFail($id);
        return view('customers.edit', compact('customer'));
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->name = $request->input('name');
        $customer->email = $request->input('email');
        $customer->dob = $request->input('dob');
        $customer->save();

        //dung session de dua ra thong bao
        Session::flash('success', 'C???p nh???t kh??ch h??ng th??nh c??ng');
        //cap nhat xong quay ve trang danh sach khach hang
        return redirect()->route('customers.index');
    }

    public function destroy($id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();

        //dung session de dua ra thong bao
        Session::flash('success', 'X??a kh??ch h??ng th??nh c??ng');

        //xoa xong quay ve trang danh sach khach hang
        return redirect()->route('customers.index');
    }
}
