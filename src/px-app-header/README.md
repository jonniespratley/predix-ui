
The `<AppHeader/>` component can be used as a wrapper for the `<AppNav/>` component. It provides a container that stays fixed to the top of the screen.

By default, the `<BrandingBar/>` will shrink to a minimized state as the user scrolls down the page, unless the `fixed` property is set.

## Usage

```react
const { AppHeader, AppNav, Card } = PxReact;
const navItems = [
{ selected: true, "path":"tab1","icon":"px-fea:alerts","eventName":"firstItem","label":"Alerts","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2","eventName":"subitemTwo"},{"label":"Sub Category 3","path":"subitem3"}]},{"path":"tab2","icon":"px-fea:asset","label":"Cases","subitems":[{"label":"Sub Category 1"},{"label":"Sub Category 2"},{"label":"Sub Category 3"}]},{"path":"tab3","icon":"px-fea:analysis","label":"Analysis"},{"path":"tab4","icon":"px-fea:dashboard","label":"Dashboards"}];

<AppHeader>
  <AppNav items={navItems}/>
  <div>
    <Card headerText="moo" icon="px-fea:cases">
      <p>
        Tofu poke church-key, next level flannel chicharrones sartorial chia small batch lo-fi celiac hoodie neutra shoreditch aesthetic. Selvage fam iPhone occupy scenester ugh hell of vegan mixtape organic. Swag chicharrones tousled fixie photo booth, chia subway tile hella taiyaki. Cloud bread viral hashtag, hoodie selvage craft beer godard. Hammock jianbing neutra XOXO pabst prism scenester fam aesthetic viral man bun waistcoat. Neutra taxidermy truffaut art party tumeric. Raw denim meditation drinking vinegar godard. IPhone sriracha gentrify, fam polaroid put a bird on it vice +1 bushwick post-ironic cornhole. Narwhal gluten-free brooklyn four loko bicycle rights ennui austin humblebrag copper mug twee lyft cold-pressed. Listicle small batch cold-pressed enamel pin intelligentsia cray keytar chicharrones paleo scenester disrupt raw denim photo booth. VHS tilde jianbing microdosing mlkshk health goth raclette intelligentsia occupy fingerstache vinyl chartreuse. Ugh quinoa echo park snackwave, you probably haven't heard of them adaptogen mustache kombucha. Cray poutine live-edge vape.
      </p>
      </Card>
  </div>
</AppHeader>

```


## Properties

```table
span: 6
rows:
  - Name: children
    Type: node
    Description: The child nodes.
```


### Styling
The following custom properties are available for styling.

```table
span: 6
rows:
  - Property: --px-app-header
    Default: null
    Description: Mixin applied to entire element.
```
