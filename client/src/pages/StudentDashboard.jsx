import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Clock, CheckCircle, XCircle, FileText } from 'lucide-react';

const StudentDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [institutions, setInstitutions] = useState([]);
    const [showApplyForm, setShowApplyForm] = useState(false);
    const [formData, setFormData] = useState({
        institutionId: '',
        course: '',
        gpa: '',
        incomeCert: '',
        casteCert: ''
    });

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        fetchApplications();
        fetchInstitutions();
    }, []);

    const fetchApplications = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/scholarship/student/${user._id}`);
            setApplications(res.data);
        } catch (error) {
            console.error('Error fetching applications', error);
        }
    };

    const fetchInstitutions = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/institutions');
            setInstitutions(res.data);
        } catch (error) {
            console.error('Error fetching institutions', error);
        }
    };

    const handleApply = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/scholarship/apply', {
                studentId: user._id,
                institutionId: formData.institutionId,
                formDetails: {
                    course: formData.course,
                    gpa: formData.gpa
                },
                documents: {
                    'Income Certificate': formData.incomeCert,
                    'Caste Certificate': formData.casteCert
                }
            });
            setShowApplyForm(false);
            fetchApplications();
            alert('Application Submitted!');
        } catch (error) {
            alert('Failed to apply');
        }
    };

    const getStatusColor = (status) => {
        if (status === 'Verified' || status === 'Institution Verified') return 'bg-green-100 text-green-800';
        if (status === 'Rejected') return 'bg-red-100 text-red-800';
        return 'bg-yellow-100 text-yellow-800';
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
                <button
                    onClick={() => setShowApplyForm(!showApplyForm)}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    <Plus className="w-5 h-5 mr-2" /> Apply for Verification
                </button>
            </div>

            {showApplyForm && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-xl font-semibold mb-4">New Application</h2>
                    <form onSubmit={handleApply} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Institution</label>
                                <select
                                    required
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                    value={formData.institutionId}
                                    onChange={(e) => setFormData({ ...formData, institutionId: e.target.value })}
                                >
                                    <option value="">Select an Institution</option>
                                    {institutions.map(inst => (
                                        <option key={inst._id} value={inst._id}>{inst.name} ({inst.state})</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Course</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formData.course}
                                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">GPA / Percentage</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formData.gpa}
                                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Income Certificate Link (Drive/Cloud)</label>
                                <input
                                    type="url"
                                    placeholder="https://..."
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formData.incomeCert}
                                    onChange={(e) => setFormData({ ...formData, incomeCert: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Caste Certificate Link (Drive/Cloud)</label>
                                <input
                                    type="url"
                                    placeholder="https://..."
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={formData.casteCert}
                                    onChange={(e) => setFormData({ ...formData, casteCert: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end pt-4">
                            <button type="button" onClick={() => setShowApplyForm(false)} className="mr-3 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit Application</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                    {applications.length === 0 ? (
                        <li className="px-6 py-4 text-center text-gray-500">No applications found.</li>
                    ) : (
                        applications.map((app) => (
                            <li key={app._id}>
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-medium text-indigo-600 truncate">
                                            Application #{app._id.slice(-6)} - {app.formDetails.course}
                                        </div>
                                        <div className="ml-2 flex-shrink-0 flex">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>
                                                {app.status === 'Verified' || app.status === 'Institution Verified' && <CheckCircle className="w-4 h-4 mr-1" />}
                                                {app.status === 'Rejected' && <XCircle className="w-4 h-4 mr-1" />}
                                                {app.status === 'Pending' && <Clock className="w-4 h-4 mr-1" />}
                                                {app.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                GPA: {app.formDetails.gpa}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-blue-500 sm:mt-0 space-x-3">
                                            {app.documents && Object.keys(app.documents).map(key => (
                                                <a key={key} href={app.documents[key]} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
                                                    <FileText className="w-3 h-3 mr-1" /> {key}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between border-t pt-2 border-gray-100">
                                        <div className="text-xs text-gray-500">
                                            <span className="font-semibold">Applied:</span> {new Date(app.appliedDate).toLocaleDateString()}
                                            {app.institutionVerifiedDate && <span className="ml-4"><span className="font-semibold">Inst Verified:</span> {new Date(app.institutionVerifiedDate).toLocaleDateString()}</span>}
                                            {app.stateVerifiedDate && <span className="ml-4"><span className="font-semibold">State Action:</span> {new Date(app.stateVerifiedDate).toLocaleDateString()}</span>}
                                        </div>
                                    </div>
                                    {(app.remarks || app.stateRemarks) && (
                                        <div className="mt-2 text-sm text-gray-500 bg-gray-50 p-2 rounded">
                                            {app.remarks && <p><span className="font-medium">Institution Remarks:</span> {app.remarks}</p>}
                                            {app.stateRemarks && <p className="mt-1"><span className="font-medium">State Remarks:</span> {app.stateRemarks}</p>}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;
