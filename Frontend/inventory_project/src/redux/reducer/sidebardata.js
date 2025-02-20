import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // it combines the concept of actions and reducers.
import axios from 'axios'; // it is used for handling http requests.
import config from '../../utils/config';

export const fetchSidebar = createAsyncThunk('data/fetchSidebar', async () => {
    const response = await axios.get(`${config.API_URL}getMenus/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });//asyncthunk is used for fetch sidebar data  from an api.
    const sidebarData = response.data.data;

    const setActiveAndExpanded = (item) => {
        if (item.module_url && window.location.pathname.indexOf(item.module_url) !== -1) {
            item.active = true;
            item.expanded = true;
            return true;
        }//A helper function [setActiveAndExpand] check if any menu item's URL is matches
        if (item.submenus && item.submenus.length > 0) {
            return item.submenus.some(submenu => setActiveAndExpanded(submenu));
        }
        return false;
    };

    sidebarData.forEach(item => {
        if (setActiveAndExpanded(item)) {
            item.expanded = true;
        }
    });//this part iterates through each time in sidebarData and sets the expand porperty through setActiveAndExpanded.

    return sidebarData;
});
const sidebarSlice = createSlice({
    name:'data',
    initialState:{
        items:[],
        status:'idle',
        error:null

    },
    reducers:{
        expamdItem(state,action){
            const item= state.items.find(item=>item.id==action.payload.id)
             if(item){
                item.expanded=!item.expanded;
             }
        },// reducer is function that takes the current state and an action the returns a new state based on action.
        activateItem(state,action){//here state represent current item and action represent intention to change the state.
            state.items.forEach(item=>{
                item.active=false;
                item.expanded=false;
                item.submenus?.forEach(submenu=>{
                    submenu.active=false;
                    if(submenu.id===action.payload.item.id){
                        submenu.active=true;
                    }
                });
                if(item.id===action.payload.item?.id || item.id===action.payload.item?.parent_id){
                    item.active=true;
                    item.expanded= true;
                }
            });
        },
        triggerPageChange(state,action){
            state.items.forEach(item=>{
                item.active=false;
                item.expanded=false;
                item.submenus.forEach(submenu=>{
                 submenu.active=false;
                 if(submenu.module_url && window.location.pathname.indexOf(submenu.module_url)!==-1){
                    submenu.active=true;
                    item.active=true;
                    item.expanded=true;
                 }
                });
                if(item.module_url && window.location.pathname.indexOf(item.module_url)!==-1 && item.submenus.length===0){
                    item.active=true;
                    item.expanded=true;
                }
            });
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSidebar.pending,(state,action)=>{
            state.status='loading';
        }).addCase(fetchSidebar.fulfilled,(state,action)=>{
            state.status='success';
            state.items=action.payload;
        }).addCase(fetchSidebar.rejected,(state,action)=>{
            state.status='failed';
            state.error=action.error.message;
        });
    }
});

export const {expandItem,activateItem,triggerPageChange}=sidebarSlice.actions;
export default sidebarSlice.reducer;
