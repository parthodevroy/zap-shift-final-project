import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import useAxios from '../../../hooks/useAxios';

const AssignRider = () => {
    const riderModalref=useRef()

    const axiosSecure = useAxios()
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?deliveryStatus=pending-pickup`)
            return res.data
        }
    })

    const assignShowModal = (parcel) => {
        riderModalref.current.showModal()

    }
    return (
        <div> 
         

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
            <dialog ref={riderModalref} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <td>Name</td>
                            <td>cost</td>
                            <td>date</td>
                            <td>pick up</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{parcel.name}</td>
                            <td>{parcel.cost}</td>
                            <td>{parcel.createdAt}</td>
                            <td>{parcel.deliveryStatus}</td>
                            <td><button onClick={assignShowModal} className='btn btn-neutral '>assign rider</button></td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignRider;