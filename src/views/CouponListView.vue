<template>
  <div class="coupon-list">
    <the-header text="优惠券列表" :left-arrow="true"/>
    <div class="tab-list">
      <van-tabs v-model="active" @click="onClickTabs">
        <van-tab title="可用">
          <div class="list" v-for="coupon in coupons.valid" :key="coupon.id">
            <div class="list-item">
              <div class="list-item-top">
                <div class="list-item-top__left">
                  <div class="coupon-price">
                    <span>{{coupon.value}}</span>
                    <span>{{coupon.unitDesc}}</span>
                  </div>
                  <div class="coupon-intro">
                    <div>{{coupon.condition}}</div>
                    <div>{{coupon.valueDesc}}</div>
                  </div>
                </div>
                <div class="list-item-top__right">
                  <div class="coupon-title">
                    {{coupon.name}}
                  </div>
                  <div class="coupon-range">
                    2022.01.08-2022.05.08
                  </div>
                </div>
              </div>
              <div class="list-item-bottom">
                {{coupon.description}}
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="不可用">
          <div class="list" v-for="coupon in coupons.invalid" :key="coupon.id">
            <div class="list-item">
              <div class="list-item-top">
                <div class="list-item-top__left">
                  <div class="coupon-price">
                    <span>{{coupon.value}}</span>
                    <span>{{coupon.unitDesc}}</span>
                  </div>
                  <div class="coupon-intro">
                    <div>{{coupon.condition}}</div>
                    <div>{{coupon.valueDesc}}</div>
                  </div>
                </div>
                <div class="list-item-top__right">
                  <div class="coupon-title">
                    {{coupon.name}}
                  </div>
                  <div class="coupon-range">
                    2022.01.08-2022.05.08
                  </div>
                </div>
              </div>
              <div class="list-item-bottom">
                {{coupon.reason}}
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Tabs, Tab, Checkbox } from 'vant';
import { TheHeader } from '../components/layout';
import { CouponInfo } from '../interface/order';

interface ConponListInfo {
  valid: CouponInfo[];
  invalid: CouponInfo[];
}

@Component({
  components: {
    TheHeader,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Checkbox.name]: Checkbox,
  },
})
export default class CouponListView extends Vue {
  private active: number = 0;
  private checked: boolean = false;
  private coupons: ConponListInfo  = {
    valid: [
      {
        id: '1',
        name: '优惠券名称',
        condition: '无使用门槛',
        startAt: 1644249600000,
        endAt: 1654617600000,
        description: '描述信息',
        value: 1.5,
        valueDesc: '最多优惠12元',
        unitDesc: '元',
      },
      {
        id: '2',
        name: '优惠券名称1',
        condition: '无使用门槛',
        startAt: 1644249600000,
        endAt: 1654617600000,
        description: '描述信息',
        value: 1.8,
        valueDesc: '最多优惠12元',
        unitDesc: '元',
      },
    ],
    invalid: [
      {
        id: '2',
        name: '优惠券名称',
        condition: '无使用门槛',
        startAt: 1643644800000,
        endAt: 1644249600000,
        description: '描述信息',
        value: 1.0,
        reason: '已经过期，自动失效',
        valueDesc: '最多优惠1元',
        unitDesc: '元',
        checked: false,
      },
    ],
  };

  public onClickTabs(name: number, title: string): void {
    // console.log(name,title)
  }
}
</script>

<style lang="less" scoped>
  .coupon-list {
    .tab-list {
      /deep/.van-tabs {
        .list {
          padding: 0 10px;
          &-item {
            margin-top: 10px;
            padding: 10px;
            text-align: left;
            background: #FFFFFF;
            border-radius: 8px;
            &-top {
              display: flex;
              justify-content: space-between;
              padding-bottom: 10px;
              &__left {
                margin-right: 20px;
                text-align: center;
                .coupon-price {
                  color: #EE0A24;
                  span:first-of-type {
                    font-size: 30px;
                    font-weight: 500;
                  }
                  span:last-of-type {
                    font-size: 12px;
                  }
                }
                .coupon-intro {
                  margin-top: 6px;
                  font-size: 12px;
                  color: #EE0A24;
                }
              }
              &__right {
                flex: 1;
                margin-top: 20px;
                position: relative;
                color: #323233;
                .coupon-title {
                  font-size: 14px;
                }
                .coupon-range {
                  margin-top: 10px;
                  font-size: 12px;
                }
                .van-checkbox {
                  position: absolute;
                  top: 50%;
                  right: 10px;
                  transform: translateY(-50%);
                }
              }
            }
            &-bottom {
              padding-top: 10px;
              font-size: 12px;
              border-top: 1px dashed #ebedf0;
            }
          }
        }
      }
    }
  }
</style>
