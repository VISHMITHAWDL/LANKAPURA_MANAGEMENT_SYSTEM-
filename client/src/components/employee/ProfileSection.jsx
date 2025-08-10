import React, { useState } from 'react'
import {useSelector} from 'react-redux';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  User,
  Edit,
  Settings
} from 'lucide-react'
import Uploadphoto from '../../assets/upload_area.png';
import RemoveProfile from '../../assets/dustbin.png';
import axios from 'axios';


// import profileApi from '../../apis/employee/profileApi';

const Profile = () => {

  const [profile, setProfile] = useState(null); // image file
  const [isEdit, setIsEdit] = useState(false);
  

  
  const [form, setForm] = useState({
    username: '',
    fullName: '',
    nic: '',
    jobtitle: '',
    gender: 'Male',
    role: 'employee',
    email: '',
    phoneNumber: '',
    address: '',
    profileImage: profile,
    dateOfBirth: '',
    joinDate: '',
    // skills: [],
    // experience: [],
    // certifications: [],
    // emergencyContact: { name: '', relationship: '', phone: '' },
    isActive: true,
    // qualifications: []
    });
  const [originalForm, setOriginalForm] = useState(form);

  const onEdit = () => {
    setIsEdit(!isEdit);
    setOriginalForm(form);
  };
  const token = useSelector((s) => s.auth.token);

  const onCancel = () => {
    setIsEdit(false);
    setForm(originalForm);
  };

  const onSave = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    // Append all fields except ones we remap or file placeholder
    Object.keys(form).forEach((key) => {
      if (['jobTitle', 'profileImage'].includes(key)) return;
      fd.append(key, form[key]);
    });
    // Map frontend jobTitle -> backend jobtitle
    fd.append('jobtitle', form.jobTitle || '');
    // Append file if selected
    if (profile) {
      fd.append('profileImage', profile);
    }
    setOriginalForm(form);
  // const api = profileApi();

  try {
    const res = await axios.post('/api/employee/create-profile', fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Profile saved:', res);
  
  } catch (error) {
    console.error('Error saving profile:', error);
   
  }


  setIsEdit(false);
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveProfile = () => {
    setProfile(null);
    const fileInput = document.getElementById('Profile');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // Qualifications handlers
  // const addQualification = () => {
  //   setForm(prev => ({
  //     ...prev,
  //     qualifications: [
  //       ...((prev.qualifications) || []),
  //       { degree: '', institution: '', yearCompleted: '' }
  //     ]
  //   }));
  // };

  // const updateQualification = (index, field, value) => {
  //   setForm(prev => ({
  //     ...prev,
  //     qualifications: (prev.qualifications || []).map((q, i) =>
  //       i === index ? { ...q, [field]: value } : q
  //     )
  //   }));
  // };

  // const removeQualification = (index) => {
  //   setForm(prev => ({
  //     ...prev,
  //     qualifications: (prev.qualifications || []).filter((_, i) => i !== index)
  //   }));
  // };

  // // Skills handlers
  // const [newSkill, setNewSkill] = useState('');
  // const addSkill = () => {
  //   const skill = newSkill.trim();
  //   if (!skill) return;
  //   setForm(prev => ({ ...prev, skills: [...(prev.skills || []), skill] }));
  //   setNewSkill('');
  // };
  // const removeSkill = (index) => {
  //   setForm(prev => ({
  //     ...prev,
  //     skills: (prev.skills || []).filter((_, i) => i !== index)
  //   }));
  // };

  // // Experience handlers
  // const addExperience = () => {
  //   setForm(prev => ({
  //     ...prev,
  //     experience: [
  //       ...(prev.experience || []),
  //       { company: '', position: '', duration: '', description: '' }
  //     ]
  //   }));
  // };
  // const updateExperience = (index, field, value) => {
  //   setForm(prev => ({
  //     ...prev,
  //     experience: (prev.experience || []).map((e, i) => i === index ? { ...e, [field]: value } : e)
  //   }));
  // };
  // const removeExperience = (index) => {
  //   setForm(prev => ({
  //     ...prev,
  //     experience: (prev.experience || []).filter((_, i) => i !== index)
  //   }));
  // };

  // // Certifications handlers
  // const addCertification = () => {
  //   setForm(prev => ({
  //     ...prev,
  //     certifications: [
  //       ...(prev.certifications || []),
  //       { title: '', organization: '', issueDate: '', expiryDate: '' }
  //     ]
  //   }));
  // };
  // const updateCertification = (index, field, value) => {
  //   setForm(prev => ({
  //     ...prev,
  //     certifications: (prev.certifications || []).map((c, i) => i === index ? { ...c, [field]: value } : c)
  //   }));
  // };
  // const removeCertification = (index) => {
  //   setForm(prev => ({
  //     ...prev,
  //     certifications: (prev.certifications || []).filter((_, i) => i !== index)
  //   }));
  // };

  // // Emergency contact and status
  // const handleEmergencyChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm(prev => ({
  //     ...prev,
  //     emergencyContact: { ...(prev.emergencyContact || {}), [name]: value }
  //   }));
  // };
  const toggleActive = () => {
    setForm(prev => ({ ...prev, isActive: !prev.isActive }));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#1F2A33] flex items-center">
          <User className="mr-3 text-[#2E7D32]" size={28} />
          Employee Profile
        </h2>
        {isEdit ? (
          <div className="flex items-center gap-3">
            <button type='submit' form="employeeProfileForm" className="px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors">Save</button>
            <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors">Cancel</button>
          </div>
        ) : (
          <button onClick={onEdit} className="flex items-center px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors">
            <Edit className="mr-2" size={16} />
            Edit Profile
          </button>
        )}
      </div>
      <form id="employeeProfileForm" onSubmit={onSave}>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="relative mr-6">
           
            <label htmlFor='Profile' className="cursor-pointer">
                <img 
                  className='w-20 h-20 rounded-full object-cover border-2 border-[#CDE7CF] hover:border-[#81C784] transition-all duration-300' 
                  src={!profile ? Uploadphoto : URL.createObjectURL(profile)} 
                  alt=""
                />
                <input 
                  onChange={(e)=>setProfile(e.target.files[0])} 
                  disabled={!isEdit}
                  type="file" 
                  id='Profile' 
                  accept="image/*"
                  hidden 
                />
            </label>
            {profile && (
              <button
                onClick={handleRemoveProfile}
                disabled={!isEdit}
                className="absolute -bottom-1 -right-1 bg-white hover:bg-[#F5F5F5] rounded-full p-1 shadow-lg transition-all duration-300 border border-gray-300"
                title="Remove profile picture"
              >
                <img src={RemoveProfile} alt="Remove" className="w-4 h-4" />
              </button>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1F2A33]">Kamal Perera</h3>
            <p className="text-gray-600">Senior Herbal Specialist</p>
            <p className="text-[#2E7D32] font-medium">Employee ID: HC001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">User name</p>
                <input name="username" value={form.username} onChange={handleChange} disabled={!isEdit} placeholder='Enter your user name' className="font-medium border rounded-lg px-3 py-2 w-full" required />
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Full name</p>
                <input name="fullName" value={form.fullName} onChange={handleChange} disabled={!isEdit} placeholder='Enter your full name' className="font-medium border rounded-lg px-3 py-2 w-full" required/>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">NIC</p>
                <input name="nic" value={form.nic} onChange={handleChange} disabled={!isEdit} placeholder='Enter your NIC' className="font-medium border rounded-lg px-3 py-2 w-full" required />
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <input type="email" name="email" value={form.email} onChange={handleChange} disabled={!isEdit} placeholder='Enter your email' className="font-medium border rounded-lg px-3 py-2 w-full" required />
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <input type="tel" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} disabled={!isEdit} placeholder='Enter your phone number' className="font-medium border rounded-lg px-3 py-2 w-full" required />
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <input name="address" value={form.address} onChange={handleChange} disabled={!isEdit} placeholder='Enter your address' className="font-medium border rounded-lg px-3 py-2 w-full" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" />
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Join Date</p>
                <input type="date" name="joinDate" value={form.joinDate} onChange={handleChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" />
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <select name="role" value={form.role} onChange={handleChange} disabled={!isEdit} className='font-medium border rounded-lg px-3 py-2 w-full'>
                  <option value="employee">employee</option>
                  <option value="manager">manager</option>
                  <option value="admin">admin</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Gender</p>
                <select name="gender" value={form.gender} onChange={handleChange} disabled={!isEdit} className='font-medium border rounded-lg px-3 py-2 w-full'>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Job title</p>
                <input name="jobTitle" value={form.jobTitle} onChange={handleChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" required />
              </div>
            </div>
            
          </div>
        </div>

        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Skills
          </h4>
          {(!form.skills || form.skills.length === 0) && !isEdit && (
            <p className="text-sm text-gray-600">No skills added.</p>
          )}
          <div className="flex flex-wrap gap-2">
            {(form.skills || []).map((s, i) => (
              <span key={i} className="px-3 py-1 bg-[#EAF5EA] text-[#2E7D32] rounded-full text-sm flex items-center gap-2">
                {s}
                {isEdit && (
                  <button
                    type="button"
                    onClick={() => removeSkill(i)}
                    className="ml-1 text-[#2E7D32] hover:text-[#1B5E20]"
                    aria-label="Remove skill"
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
          {isEdit && (
            <div className="mt-3 flex gap-2">
              <input
                className="border rounded-lg px-3 py-2"
                placeholder="Add a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors"
              >
                Add
              </button>
            </div>
          )}
        </div> */}

        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Qualifications
          </h4>
          {(form.qualifications.length === 0 && !isEdit) ? 
            <p className="text-sm text-gray-600">No qualifications added.</p>
          :

          (
            <div className="space-y-4">
              {form.qualifications.map((q, idx) => (
                <div key={idx} className="bg-[#FAFBF7] border border-[#E0E0E0] rounded-lg p-4">
                  
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                      <div>
                        <p className="text-sm text-gray-600">Degree</p>
                        <input
                          className="font-medium border rounded-lg px-3 py-2 w-full"
                          placeholder="e.g., BSc in Computer Science"
                          value={q.degree}
                          onChange={(e) => updateQualification(idx, 'degree', e.target.value)}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Institution</p>
                        <input
                          className="font-medium border rounded-lg px-3 py-2 w-full"
                          placeholder="e.g., University of Colombo"
                          value={q.institution}
                          onChange={(e) => updateQualification(idx, 'institution', e.target.value)}
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <p className="text-sm text-gray-600">Year Completed</p>
                          <input
                            type="number"
                            className="font-medium border rounded-lg px-3 py-2 w-full"
                            placeholder="e.g., 2022"
                            value={q.yearCompleted}
                            onChange={(e) => updateQualification(idx, 'yearCompleted', e.target.value)}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeQualification(idx)}
                          className="self-end px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
          
                </div>
              ))}
            </div>
          )}

          {isEdit && (
            <button
              type="button"
              onClick={addQualification}
              className="mt-4 px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors"
            >
              Add Qualification
            </button>
          )}
        </div> */}

        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Experience
          </h4>
          {(!form.experience || form.experience.length === 0) && !isEdit && (
            <p className="text-sm text-gray-600">No experience added.</p>
          )}
          {(form.experience || []).map((exp, idx) => (
            <div key={idx} className="mb-4 bg-[#FAFBF7] border border-[#E0E0E0] rounded-lg p-4">
              {isEdit ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <p className="text-sm text-gray-600">Company</p>
                    <input className="font-medium border rounded-lg px-3 py-2 w-full" value={exp.company} onChange={(e)=>updateExperience(idx,'company',e.target.value)} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Position</p>
                    <input className="font-medium border rounded-lg px-3 py-2 w-full" value={exp.position} onChange={(e)=>updateExperience(idx,'position',e.target.value)} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <input className="font-medium border rounded-lg px-3 py-2 w-full" placeholder="e.g., 2019-2021" value={exp.duration} onChange={(e)=>updateExperience(idx,'duration',e.target.value)} />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Description</p>
                      <input className="font-medium border rounded-lg px-3 py-2 w-full" value={exp.description} onChange={(e)=>updateExperience(idx,'description',e.target.value)} />
                    </div>
                    <button type="button" onClick={()=>removeExperience(idx)} className="self-end px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm">Remove</button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Company</p>
                    <p className="font-medium">{exp.company || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Position</p>
                    <p className="font-medium">{exp.position || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-medium">{exp.duration || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Description</p>
                    <p className="font-medium">{exp.description || '-'}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isEdit && (
            <button type="button" onClick={addExperience} className="mt-2 px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors">Add Experience</button>
          )}
        </div> */}

        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Certifications
          </h4>
          {(!form.certifications || form.certifications.length === 0) && !isEdit && (
            <p className="text-sm text-gray-600">No certifications added.</p>
          )}
          {(form.certifications || []).map((cert, idx) => (
            <div key={idx} className="mb-4 bg-[#FAFBF7] border border-[#E0E0E0] rounded-lg p-4">
              {isEdit ? (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div>
                    <p className="text-sm text-gray-600">Title</p>
                    <input className="font-medium border rounded-lg px-3 py-2 w-full" value={cert.title} onChange={(e)=>updateCertification(idx,'title',e.target.value)} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Organization</p>
                    <input className="font-medium border rounded-lg px-3 py-2 w-full" value={cert.organization} onChange={(e)=>updateCertification(idx,'organization',e.target.value)} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issue Date</p>
                    <input type="date" className="font-medium border rounded-lg px-3 py-2 w-full" value={cert.issueDate} onChange={(e)=>updateCertification(idx,'issueDate',e.target.value)} />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Expiry Date</p>
                      <input type="date" className="font-medium border rounded-lg px-3 py-2 w-full" value={cert.expiryDate} onChange={(e)=>updateCertification(idx,'expiryDate',e.target.value)} />
                    </div>
                    <button type="button" onClick={()=>removeCertification(idx)} className="self-end px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm">Remove</button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Title</p>
                    <p className="font-medium">{cert.title || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Organization</p>
                    <p className="font-medium">{cert.organization || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issue Date</p>
                    <p className="font-medium">{cert.issueDate || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expiry Date</p>
                    <p className="font-medium">{cert.expiryDate || '-'}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isEdit && (
            <button type="button" onClick={addCertification} className="mt-2 px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors">Add Certification</button>
          )}
        </div> */}

        {/* <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Emergency Contact
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <input name="name" value={form.emergencyContact?.name || ''} onChange={handleEmergencyChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Relationship</p>
              <input name="relationship" value={form.emergencyContact?.relationship || ''} onChange={handleEmergencyChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <input name="phone" value={form.emergencyContact?.phone || ''} onChange={handleEmergencyChange} disabled={!isEdit} className="font-medium border rounded-lg px-3 py-2 w-full" />
            </div>
          </div>
        </div> */}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Status
          </h4>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={form.isActive} onChange={toggleActive} disabled={!isEdit} />
            <span className="text-sm text-gray-700">Active</span>
          </label>
        </div>

      </div>
      </form>
    </div>
  )
}

export default Profile
