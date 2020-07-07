import { getAction, postAction, putAction, deleteAction } from '@/utils/ajax'
import config from '@/config/defaultSettings'

const _PREFIX = config.mockPrefix

////// 机构管理

// 获取机构部门列表
const queryDepartTreeList = (params) => getAction(_PREFIX + '/depart/getDepartList', params)

// 获取下拉树
const queryIdTree = (params) => getAction(_PREFIX + '/depart/queryIdTree', params)

// 关键字查询部门
const searchByKeywords = (id) => getAction(_PREFIX + '/depart/searchBy', {id})

// 添加
const addDepart = (params) => postAction(_PREFIX + '/depart/addDepart', params)

// 编辑
const editDepart = (params) => putAction(_PREFIX + '', params)

// 删除部门
const delDepart = (params) => deleteAction(_PREFIX + '/depart/delDepart', params)

// 新增部门角色
const addDepartRole = (params) => postAction(_PREFIX + '/depart/addDepartRole', params)

// 权限树
const queryTreeListForRole = (params) => getAction(_PREFIX + '/depart/role/queryTreeList', params)

const queryDepartPermission = (params) => getAction(_PREFIX + '/depart/queryDepartPermission', params)

const saveDepartPermission = (params) => postAction(_PREFIX + '', params)

////// 机构部门

// 机构部门列表
const queryMyDepartTreeList = (params) => getAction(_PREFIX + '/depart/queryMyDepartTreeList', params)

// 添加部门用户
const addDepartUser = (params) => postAction(_PREFIX + '/depart/role/queryTreeList', params)

// 编辑部门用户
const editDepartUser = (params) => putAction(_PREFIX + '/depart/role/queryTreeList', params)

// 查询部门用户角色
const queryDeptRolePermission = (params) => getAction(_PREFIX + '/depart/role/queryTreeList', params)

// 查询部门角色权限
const queryDepartUserRole = (params) => getAction(_PREFIX + '/depart/role/queryTreeList', params)

// 查询部门角色树列表
const queryTreeListForDeptRole = (params) => getAction(_PREFIX + '/depart/role/queryTreeList', params)

// 保存部门角色权限
const saveDeptRolePermission = (params) => postAction(_PREFIX + '/depart/role/queryTreeList', params)

// 查询全部角色
const queryall = (params) => postAction(_PREFIX + '/depart/role/queryTreeList', params)

export {
  queryDepartTreeList,
  queryIdTree,
  searchByKeywords,
  addDepart,
  editDepart,
  delDepart,
  addDepartRole,

  queryTreeListForRole,
  queryDepartPermission,
  saveDepartPermission,

  queryMyDepartTreeList,
  addDepartUser,
  editDepartUser,
  queryDeptRolePermission,
  queryDepartUserRole,
  queryTreeListForDeptRole,
  saveDeptRolePermission,
  queryall
}
