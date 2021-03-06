import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditContacts() {
	const { store, actions } = useContext(Context);

	const [editName, setEditName] = useState(store.editContact.full_name);
	const [editEmail, setEditEmail] = useState(store.editContact.email);
	const [editPhone, setEditPhone] = useState(store.editContact.phone);
	const [editAddress, setEditAddress] = useState(store.editContact.address);

	const { param } = useParams();

	return (
		<>
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Edit this contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								defaultValue={editName}
								onChange={e => setEditName(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								defaultValue={editEmail}
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEditEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								defaultValue={editPhone}
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setEditPhone(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								defaultValue={editAddress}
								className="form-control"
								placeholder="Enter address"
								onChange={e => setEditAddress(e.target.value)}
							/>
						</div>
						<Link
							to="/"
							onClick={e => actions.fetchEditContact(editName, editEmail, editPhone, editAddress)}>
							<button type="button" className="btn btn-primary form-control">
								save
							</button>
						</Link>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditContacts;
