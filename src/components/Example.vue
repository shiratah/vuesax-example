<template>
  <div>
    <!-- button -->
    <vs-row>
      <vs-button color="primary" type="filled">Primary</vs-button>
      <vs-button color="success" type="filled">Success</vs-button>
      <vs-button color="danger" type="filled">Danger</vs-button>
      <vs-button color="warning" type="filled">Warning</vs-button>
      <vs-button color="dark" type="filled">Dark</vs-button>
      <vs-button color="rgb(134, 4, 98)" type="filled">RGB</vs-button>
      <vs-button disabled type="filled">Disabled</vs-button>
      <vs-button color="primary" type="filled" to="/components/list.html">Router</vs-button>
    </vs-row>
    <!-- textfield with label-->
    <vs-row>
      <vs-input label="Name" placeholder="Placeholder" v-model="inputs.value1"/>
      <vs-input type="password" label="Password" placeholder="Disabled" v-model="inputs.value2"/>
    </vs-row>
    <!-- slider -->
    <vs-row>
      <vs-slider v-model="slideBars.value1"/>
      <vs-slider disabled="true" v-model="slideBars.value2"/>
      <vs-slider max=200 v-model="slideBars.value3"/>
    </vs-row>
    <!-- avatar icon -->
    <vs-row>
      <vs-avatar />
      <vs-avatar text="Luis Daniel"/>
      <vs-avatar text="Luisd"/>
      <vs-avatar src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4"/>
    </vs-row>
    <!-- switch -->
    <vs-row>
      <vs-switch v-model="switches.switch1">
        <span slot="on">On</span>
        <span slot="off">Off</span>
      </vs-switch>
      <vs-switch color="success" v-model="switches.switch2">
        <span slot="on">Accept</span>
        <span slot="off">Cancel</span>
      </vs-switch>
      <vs-switch color="danger" vs-icon-off="close" v-model="switches.switch3">
        <span slot="on">Remove</span>
      </vs-switch>
      <vs-switch color="warning" vs-icon-on="error_outline" v-model="switches.switch4">
        <span slot="off">Prevent</span>
      </vs-switch>
      <vs-switch color="dark" vs-icon-on="check_box" vs-icon-off="block" v-model="switches.switch5">
        <span slot="on">YES</span>
        <span slot="off">NO</span>
      </vs-switch>
    </vs-row>
    <!--card -->
    <vs-row vs-justify="center" vs-w="6">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card class="cardx">
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div slot="media">
            <img src="http://recruit.istyle.co.jp/fresh/wordpress/wp-content/uploads/2017/09/bnr01-744_370_v03.jpg">
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
        <vs-card class="cardx">
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div slot="media">
            <img src="http://www.istyle.co.jp/common/img/ogp.png">
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// main.jsで読み込むとアイコンがズレました何故か
import 'material-icons/iconfont/material-icons.css'

export default {
  name: 'example',
  data () {
    return {
      inputs: {
        value1: '',
        value2: ''
      },
      slideBars: {
        value1: 67,
        value2: 34,
        value3: 60
      },
      switches: {
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false
      }

    }
  }
}
</script>
