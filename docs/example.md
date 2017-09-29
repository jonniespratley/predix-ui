# example

```react
const { AppHeader, AppNav, Button, Card, Drawer, Navbar } = PxReact;

const navItems = [
{ selected: true, "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2","eventName":"subitemTwo"},{"label":"Sub Category 3","path":"subitem3"}]},{"path":"tab2","icon":"px-fea:asset","label":"Cases","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}];


const style = {};

<AppHeader title='My App' items={navItems}>
  <div style={style}>
    <Card headerText="moo" icon="px-fea:cases">
      <p>
        Tofu poke church-key, next level flannel chicharrones sartorial chia small batch lo-fi celiac hoodie neutra shoreditch aesthetic. Selvage fam iPhone occupy scenester ugh hell of vegan mixtape organic. Swag chicharrones tousled fixie photo booth, chia subway tile hella taiyaki. Cloud bread viral hashtag, hoodie selvage craft beer godard. Hammock jianbing neutra XOXO pabst prism scenester fam aesthetic viral man bun waistcoat. Neutra taxidermy truffaut art party tumeric. Raw denim meditation drinking vinegar godard. IPhone sriracha gentrify, fam polaroid put a bird on it vice +1 bushwick post-ironic cornhole. Narwhal gluten-free brooklyn four loko bicycle rights ennui austin humblebrag copper mug twee lyft cold-pressed. Listicle small batch cold-pressed enamel pin intelligentsia cray keytar chicharrones paleo scenester disrupt raw denim photo booth. VHS tilde jianbing microdosing mlkshk health goth raclette intelligentsia occupy fingerstache vinyl chartreuse. Ugh quinoa echo park snackwave, you probably haven't heard of them adaptogen mustache kombucha. Cray poutine live-edge vape.
      </p>
      <Button label='Read more...' primary/>
      </Card>
  </div>
</AppHeader>

```
