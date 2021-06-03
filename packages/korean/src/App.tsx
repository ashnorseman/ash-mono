import './App.scss';

function App() {

  return (
    <>
      <div className={'item-group'}>
        <ash-button
          text={'Button'}
          theme={'primary'} />

        <ash-button
          disabled={true}
          text={'Button'}
          theme={'primary'} />

        <ash-button
          text={'Button'}
          theme={'secondary'} />

        <ash-button
          disabled={true}
          text={'Button'}
          theme={'secondary'} />

        <ash-button
          text={'Button'} />

        <ash-button
          disabled={true}
          text={'Button'} />

        <ash-button
          text={'Button'}
          theme={'warning'} />

        <ash-button
          disabled={true}
          text={'Button'}
          theme={'warning'} />
      </div>

      <div className={'item-group'}>
        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'primary'} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'primary'} />

        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'secondary'} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'secondary'} />

        <ash-button
          icon={'add_circle'}
          text={'Button'} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'} />

        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'warning'} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'warning'} />
      </div>

      <div className={'item-group'}>
        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'primary'}
          trailing={true} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'primary'}
          trailing={true} />

        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'secondary'}
          trailing={true} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'secondary'}
          trailing={true} />

        <ash-button
          icon={'add_circle'}
          text={'Button'}
          trailing={true} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          trailing={true} />

        <ash-button
          icon={'add_circle'}
          text={'Button'}
          theme={'warning'}
          trailing={true} />

        <ash-button
          disabled={true}
          icon={'add_circle'}
          text={'Button'}
          theme={'warning'}
          trailing={true} />
      </div>

      <div className={'item-group'}>
        <ash-button-group>
          <ash-button
            text={'Button'} />

          <ash-button
            text={'Button'} />

          <ash-button
            text={'Button'} />
        </ash-button-group>

        <ash-button
          label={1024}
          icon={'add_circle'}
          text={'Button'} />

        <ash-button
          dropdown={true}
          text={'Button'} />
      </div>

      <div className={'item-group'}>
        <ash-button
          block={true}
          text={'Button'}
          theme={'primary'} />
      </div>

      <div className={'item-group'}>
        <ash-tag
          text={'Tag'} />

        <ash-tag
          icon={'add_circle'}
          text={'Tag'} />

        <ash-tag
          icon={'clear'}
          text={'Tag'}
          trailing={true} />

        <ash-tag
          rounded={true}
          text={'Tag'} />

        <ash-tag
          icon={'add_circle'}
          rounded={true}
          text={'Tag'} />

        <ash-tag
          icon={'clear'}
          rounded={true}
          text={'Tag'}
          trailing={true} />
      </div>

      <div className={'item-group'}>
        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip>Tooltip</ash-tooltip>
        </ash-tooltip-container>

        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip
            theme={'primary'}>Tooltip</ash-tooltip>
        </ash-tooltip-container>

        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip
            theme={'light'}>Tooltip</ash-tooltip>
        </ash-tooltip-container>

        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip
            position={'bottom'}>Tooltip</ash-tooltip>
        </ash-tooltip-container>

        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip
            position={'left'}>Tooltip</ash-tooltip>
        </ash-tooltip-container>

        <ash-tooltip-container>
          <div className={'tooltip-target'} />
          <ash-tooltip
            position={'right'}>Tooltip</ash-tooltip>
        </ash-tooltip-container>
      </div>

      <div className={'item-group'}>
        <ash-text-input
          maxLength={5}
          minLength={2}
          placeholder={'Enter: 123'}
          required={true} />

        <ash-text-input
          disabled={true}
          value={'Text input'} />
      </div>
    </>
  );
}

export default App;
