<style lang="less" scoped>
@import "./shop.less";
</style>
<template>
  <Layout
    class="shop"
    style="height:100%;"
  >
    <Header>
      <Menu
        mode="horizontal"
        theme="dark"
        active-name="1"
      >
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <div class="title">买东西</div>
          <div class="user">你好</div>
        </div>
      </Menu>
    </Header>
    <Content :style="{padding: '0 50px'}">
      <Breadcrumb :style="{margin: '20px 0'}">
      </Breadcrumb>
      <Card style="margin-bottom:20px;">
        <div style="min-height: 200px;">
          <div class="goods">
            <h3>Cart List</h3>
            <div class="list">
              <Table
                border
                ref="goods-list"
                :columns="columns"
                :data="tableData"
              ></Table>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div style="min-height: 200px;">
          <div class="cart">
            <h3>My Cart</h3>
            <div class="list">
              <Table
                border
                ref="cart-list"
                :columns="columns1"
                :data="tableData1"
              ></Table>
            </div>
          </div>
          <Modal
            v-model="showModTotalModal"
            title="修改总数量"
            @on-ok="okMod1"
          >
            <div class="input-number-wrapper">
              <InputNumber
                :min="0"
                v-model="modValue1"
              ></InputNumber>
            </div>
          </Modal>
        </div>
      </Card>
    </Content>
  </Layout>

</template>

<script>
export default {
  name: 'shop',
  components: {
  },
  data() {
    return {
      columns: [
        {
          title: 'name',
          key: 'name',
        },
        {
          title: 'city',
          key: 'city'
        },
        {
          title: 'price',
          key: 'price'
        },
        {
          title: 'number',
          key: 'number'
        },
        {
          title: 'picture',
          key: 'picture'
        },
        {
          title: 'action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    /* this.modValue = params.row.remain
                    this.modIndex = params.index
                    this.show(params.index) */
                    this.clickAddToCart(params)
                  }
                }
              }, '加入购物车')
            ]);
          }
        }
      ],
      columns1: [
        {
          title: 'name',
          key: 'goodsName',
        },
        {
          title: 'price',
          key: 'price'
        },
        {
          title: 'num',
          key: 'goodsNum'
        },
        /* {
          title: '金额',
          key: 'goodsAmount'
        }, */ {
          title: 'action',
          key: 'goodsNum',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px',
                },
                on: {
                  click: () => {
                    this.modValue1 = params.row.goodsNum
                    this.modIndex1 = params.index
                    this.show1(params.index)
                  }
                }
              }, '修改'), h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.modValue1 = params.row.total
                    this.modIndex1 = params.index
                    this.remove1(params.row.id)
                  }
                }
              }, '删除')
            ]);
          }
        },
      ],
      tableData: [],
      tableData1: [],
      showModTotalModal: false,
      modValue1: 0
    }
  },
  created() {
    this.listGoods()
    this.listCart()
  },
  methods: {
    listGoods() {
      this.$api.shop.listGoods().then(res => {
        this.tableData = res.data
      })
    },
    listCart() {
      this.$api.shop.listCart().then(res => {
        this.tableData1 = res.data
      })
    },
    clickAddToCart(goods) {
      console.log(goods, 'goods')
      const { id } = this.tableData[this.modIndex]
      this.$api.shop.insetGoods({ id }).then(res => {
        this.$Message.success('添加成功')
        this.listGoods()
        this.listCart()
      })
    },
    show1(index) {
      this.showModTotalModal = true
    },
    okMod1() {
      console.log('修改总数量')
    },
    remove1(id) {
      this.$Modal.confirm({
        title: '确认删除该商品？',
        content: '',
        onOk: () => {
          this.$api.shop.deleteGoods({ id }).then(res => {
            this.$Message.success('删除成功')
            this.listGoods()
            this.listCart()
          })
        }
      })
    },
  }
};
</script>
